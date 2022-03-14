import React, { useState, useEffect } from 'react';
import CatalogLayout from '../components/catalog/CatalogLayout';
import FilterSidebar from '../components/catalog/FilterSidebar';
import ItemGrid from '../components/catalog/ItemGrid';
import ResultBar from '../components/catalog/ResultBar';
import InputGroup from '../components/catalog/InputGroup';

import { connect } from 'react-redux';
import { selectItemsInPriceRange } from '../store/selectors';

const filterTypes = [
    {
        id: 1,
        name: "Brands",
        filterFunction: types => {
            return  function (item) { 
                const title = item.title;
                for (let i = 0; i < types.length; i++) {
                    const { name, show } = types[i];
                    if ( !show && title.includes(name)) return false;
                }
                return true;
            }
        },
        types: [
            {
                name: 'Babolat',
                show: true
            },
            {
                name: 'Wilson',
                show: true
            },
            {
                name: 'Head',
                show: true
            },
            {
                name: 'Fisher',
                show: true
            },
            {
                name: 'Epip',
                show: true
            },
            {
                name: 'Behri',
                show: true
            },
            {
                name: 'Tech',
                show: true
            },
            {
                name: 'GUi',
                show: true
            },
            {
                name: 'dilsonW',
                show: true
            },
            {
                name: 'geeeeeeerrr',
                show: true
            },
            {
                name: 'Baranka',
                show: true
            },
            {
                name: 'devils',
                show: true
            },
            {
                name: 'GUiree',
                show: true
            },
            {
                name: 'Webiran',
                show: true
            },
            {
                name: 'Tittttaa',
                show: true
            },
            {
                name: 'Girrrrsa',
                show: true
            },
            {
                name: 'Dudse',
                show: true
            },
            {
                name: 'Beigali',
                show: true
            },
           
        ]
    },
    {
        id: 2,
        name: "Type",
        filterFunction: types => {
            return  function (item) { 
                const type = item.type;
                for (let i = 0; i < types.length; i++) {
                    const { name, show } = types[i];
                    if ( !show && type === name) return false;
                }
                return true;
            }
        },
        types: [
            {
                name: 'strings',
                show: true
            },
            {
                name: 'no-string',
                show: true
            },
        ]
    }
];

const sortFunction = {
    'a-z': (a, b) => a.title.localeCompare(b.title) * (-1),
    'z-a': (a, b) => a.title.localeCompare(b.title),
    'low-to-high': (a, b) => b.price - a.price,
    'high-to-low': (a, b) => a.price - b.price,
}

const Catalog = ({initItems}) => {
    const [filters, setFilters] = useState(filterTypes);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5000);
    const [filteredItems, setFilteredItems] = useState(initItems);
    const [sortOrder, setSortOrder] = useState('a-z');

    const handleFilterChange = (typeId, title) => {
        setFilters(
            filters.map(filterType => ({
                ...filterType,
                types: filterType.types.map(({ name, show }) => ({
                    name,
                    show: typeId === filterType.id && name === title ? !show : show
                }))
            }))
        )
    }

    useEffect(() => {
    
        let items = initItems.filter(({ price }) => price >= minValue && price <= maxValue)
        filters.forEach(filter => {
            items = items.filter(filter.filterFunction(filter.types));
        });
        setFilteredItems(items);
    }, [filters, minValue, maxValue])
    
    useEffect(() => {
        setFilteredItems(filteredItems.sort(sortFunction[sortOrder]));
    }, [sortOrder]);


    const filterList = filters.map((filterType) => {
        const mapArrays = filterType.types.map(({ name, show }) =>
            <InputGroup
                key={name}
                title={name}
                type="checkbox"
                initValue={show}
                onChange={(title) => handleFilterChange(filterType.id, title)}
            />
        );

        return (
            <div className="input-name">
                <h3 style={{margin: "20px", color: "#59AB30"}}>{filterType.name}</h3>
                {mapArrays}
            </div>
        );
    })

    return (
        <CatalogLayout>
            <ResultBar count={filteredItems.length} sortOrder={sortOrder} onSortOrderChange={setSortOrder} />
            <FilterSidebar>
                <InputGroup key='min' title="Min Price" type="text" initValue={minValue} onChange={setMinValue} />
                <InputGroup key='max' title="Max Price" type="text" initValue={maxValue} onChange={setMaxValue} />
                {filterList}
            </FilterSidebar>
            <ItemGrid items={filteredItems} />
        </CatalogLayout>
    )
};

const mapStateToProps = (state) => ({
    initItems: state.catalog.items,
    filteredItems: (min, max) => selectItemsInPriceRange(state, min, max)
});

export default connect(mapStateToProps)(Catalog);
