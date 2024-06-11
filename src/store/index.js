import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            sites: [
                { id: 1, name: 'Site 1', description: 'Description for site 1' },
                { id: 2, name: 'Site 2', description: 'Description for site 2' },
                { id: 3, name: 'Site 3', description: 'Description for site 3' },
                { id: 4, name: 'Site 4', description: 'Description for site 4' },
                { id: 5, name: 'Site 5', description: 'Description for site 5' },
                { id: 6, name: 'Site 6', description: 'Description for site 6' },
            ],
        };
    },
    getters: {
        getSiteById: (state) => (id) => {
            return state.sites.find(site => site.id === id);
        }
    }
});

export default store;
