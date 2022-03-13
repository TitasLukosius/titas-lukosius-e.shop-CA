import React, { useState, useEffect } from 'react';
import CatalogLayout from '../components/catalog/CatalogLayout';
import FilterSidebar from '../components/catalog/FilterSidebar';
import ItemGrid from '../components/catalog/ItemGrid';
import ResultBar from '../components/catalog/ResultBar';
import InputGroup from '../components/catalog/InputGroup';

// masyvas filtracijos tipai
const initItems = [
    { id: 1, type: 'strings', title: "Babolat Pure-Drive", price: 1600, description: 'aaa', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/}` },
    { id: 2, type: 'strings', title: "Babolat Pure-Drive", price: 1200, description: 'aaa', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
    { id: 3, type: 'strings', title: "Babolat Pure-Drive", price: 600, description: 'aaa', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
    { id: 4, type: 'no-string', title: "Fisher Pure-Aero", price: 200, description: 'aaa', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
    { id: 5, type: 'no-string', title: "Fisher Pure-Aero", price: 1250, description: 'aaa', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
    { id: 6, type: 'no-string', title: "Fisher Pure-Aero", price: 750, description: 'aaa', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
    { id: 7, type: 'no-string', title: "Wilson egz", price: 220, description: 'aaa', img: "https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
    { id: 8, type: 'no-string', title: "Wilson egs", price: 850, description: 'aaa', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
    { id: 9, type: 'no-string', title: "Wilson egs", price: 2500, description: 'aaa', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
    { id: 10, type: 'strings', title: "Head Pro GU", price: 550, description: 'aaa', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
    { id: 11, type: 'strings', title: "Head Pro GU", price: 950, description: 'aaa', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
    { id: 12, type: 'no-string', title: "Head Pro GU", price: 380, description: 'aaa', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
];

const filterTypes = [
    {
        id: 1,
        name: "Brands",
        //  curry methodology - function return function, naudojama perduoti papildomiem parametram
        filterFunction: types => {
            // Funkcija kuris bus naudojama arr.filter(... cia....), turi grazint true arba false
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
    'rating': (a, b) => a.rating - b.rating,
}

const Catalog = () => {
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
        // Filtering
        let items = initItems.filter(({ price }) => price >= minValue && price <= maxValue)
        // Multi filtering
        filters.forEach(filter => {
            items = items.filter(filter.filterFunction(filter.types));
        });
        setFilteredItems(items);
    }, [filters, minValue, maxValue])
    
    // Sorting
    useEffect(() => {
        setFilteredItems(filteredItems.sort(sortFunction[sortOrder]));
    }, [sortOrder]);


    // is filtracijos masyvo atfiltruoja vertes ir generuoja inputGroupa su kiekvienu elementu
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
                <h3>{filterType.name}</h3>
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

export default Catalog;
