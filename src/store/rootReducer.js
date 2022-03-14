import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes.js';

const store = {
    cart: {
        items: []
    },
    auth: {
        loggedIn: false,
        email: ''
    },
    catalog: {
        items: [
            { id: 1, type: 'strings', title: "Babolat Pure-Drive", price: 1600, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id` },
            { id: 2, type: 'strings', title: "Babolat Pure-Drive", price: 1200, description: 'a a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
            { id: 3, type: 'strings', title: "Babolat Pure-Drive", price: 600, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
            { id: 4, type: 'no-string', title: "Fisher Pure-Aero", price: 200, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
            { id: 5, type: 'no-string', title: "Fisher Pure-Aero", price: 1250, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
            { id: 6, type: 'no-string', title: "Fisher Pure-Aero", price: 750, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
            { id: 7, type: 'no-string', title: "Wilson egz", price: 220, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img: "https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
            { id: 8, type: 'no-string', title: "Wilson egs", price: 850, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
            { id: 9, type: 'no-string', title: "Wilson egs", price: 2500, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
            { id: 10, type: 'strings', title: "Head Pro GU", price: 550, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
            { id: 11, type: 'strings', title: "Head Pro GU", price: 950, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
            { id: 12, type: 'no-string', title: "Head Pro GU", price: 380, description: 'a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis a bat with a long handle attached to a round frame with a network of tight strings over it; used to hit the ball in tennis', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
        ],
    }

};

export default function (state = store, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items.findIndex(({ id }) => id === action.payload.id) >= 0
                        ? state.cart.items.map(item => ({
                            ...item,
                            purchaseAmount: item.id === action.payload.id ? item.purchaseAmount + 1 : item.purchaseAmount
                        }))
                        : [
                            ...state.cart.items,
                            {
                                ...state.catalog.items.find(({ id }) => id === action.payload.id),
                                purchaseAmount: 1
                            }
                        ]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items
                        .map(item => ({
                            ...item,
                            purchaseAmount: item.id === action.payload.id ? item.purchaseAmount - 1 : item.purchaseAmount
                        }))
                        .filter(({purchaseAmount}) => purchaseAmount > 0)
                }
            };
        default: return state;
    }
}


