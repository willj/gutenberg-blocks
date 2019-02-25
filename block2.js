const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, InspectorControls } = wp.editor;
const { IconButton, SelectControl } = wp.components;
const { withSelect } = wp.data;

const selectSectors = withSelect(select => {

    let sectors = select('core').getEntityRecords('taxonomy', 'sector', {}) || [];

    return {
        sectors: sectors.map((sector) => ({
            label: sector.name,
            value: sector.slug
        }))
    };
});

registerBlockType('c48kblocks/block-2', {
    title: '48k block 2',
    icon: 'thumbs-up',
    category: 'layout',

    attributes: {
        sector: {
            type: 'string',
            default: ''
        }
    },

    edit: selectSectors(({sectors, className, attributes, setAttributes}) => {
        
        function onSectorChange(sector){
            setAttributes({sector: sector});
        }

        return (
            <div className={className}>
                <InspectorControls>
                    <p>Hello inspector</p>
                    <SelectControl label="Choose a sector" value={attributes.sector} onChange={onSectorChange} 
                        options={[{ label: '', value: '' }, ...sectors]} />
                </InspectorControls>
                <div>
                    <p>Choose a sector from the panel on the right</p>
                    <p>Sector: {attributes.sector}</p>
                </div>
            </div>
        );
    }),

    save() {
        // this is server rendered
        return null;
    },
});