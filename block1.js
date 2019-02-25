const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, InspectorControls, MediaUpload, MediaUploadCheck } = wp.editor;
const { IconButton, SelectControl } = wp.components;

registerBlockType('c48kblocks/block-1', {
    title: '48k block 1',
    icon: 'paperclip',
    category: 'layout',

    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        cheeseCounter: {
            type: 'number',
            default: 0
        },
        sector: {
            type: 'string',
            default: ''
        },
        imageId: {
            type: 'number'
        },
        imageUrl: {
            type: 'string'
        }
    },

    edit({className, attributes, setAttributes}) {
        
        function onChangeContent(newContent){
            setAttributes({content: newContent});
        }

        function onCheeseClicked(){
            setAttributes({cheeseCounter: attributes.cheeseCounter + 1});
        }

        function onSectorChange(sector){
            setAttributes({sector: sector});
        }

        function onImageSelected(media){
            // you'd probably select the right size, and save the alt text etc too
            console.log(media);
            setAttributes({imageId: media.id, imageUrl: media.url});
        }

        return (
            <div className={className}>
                <BlockControls>
                    <IconButton icon="paperclip" label="cheese!" onClick={onCheeseClicked} />
                </BlockControls>
                
                <InspectorControls>
                    <p>Hello inspector</p>
                    <SelectControl label="Choose a sector" value={attributes.sector} onChange={onSectorChange} 
                        options={[{ label: '', value: '' }, { label: 'B2B', value: 'B2B' }, { label: 'B2C', value: 'B2C' }]} />
                </InspectorControls>

                <h2>Cheese was clicked {attributes.cheeseCounter} times!</h2>
                <RichText tagName="p"onChange={onChangeContent} value={attributes.content} placeholder="Write some rubbish here!" />
                <div>
                    <p>Selected sector: {attributes.sector}</p>
                </div>
                <MediaUploadCheck>
                    <MediaUpload allowedTypes="image" multiple={false} value={attributes.imageId} onSelect={onImageSelected} 
                        render={({open}) => (
                            <div>
                                {attributes.imageUrl && <img src={attributes.imageUrl} />}
                                <button onClick={open}>Add Image</button>
                            </div>)} />
                </MediaUploadCheck>
            </div>
        );
    },

    save({attributes}) {
        return (
            <div>
                <h2>Cheese was clicked {attributes.cheeseCounter} times!</h2>
                <RichText.Content tagName="p" value={attributes.content} />
                <div>
                    <p>Sector: {attributes.sector}</p>
                </div>
                {attributes.imageUrl && <img src={attributes.imageUrl} />}
            </div>
        );
    },
});