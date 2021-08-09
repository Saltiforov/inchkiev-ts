import {createStore} from "vuex";


export default createStore({
    state: {
        persons: [
            {
                id: 1,
                name: 'Марія',
                age: 19,
                descr: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.',
                img: 'image1.png'
            },
            {
                id: 2,
                name: 'Степан',
                age: 61,
                descr: 'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?',
                img: 'image2.png'
            },
            {
                id: 3,
                name: 'Любов',
                age: 58,
                descr: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.',
                img: 'image3.png'
            },
            {
                id: 4,
                name: 'Олександр',
                age: 20,
                descr: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.',
                img: 'image4.png'
            },
            {
                id: 5,
                name: 'Ірина',
                age: 55,
                descr: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.',
                img: 'image5.png'
            }
        ],
        personTabs: [
            {id: 0, name: 'Препарат 1'},
            {id: 1, name: 'Препарат 2'},
            {id: 2, name: 'Препарат 3'}
        ],
        salesResult: [],
        parameters: [
            {id: 1, path: 'sad_icon.png', count: 0},
            {id: 2, path: 'happy_icon.png', count: 0},
            {id: 3, path: 'heart_icon.png', count: 0}
        ]

    },
    getters: {
        allPersons: state => {
            return state.persons;
        },
        allTabs: state => {
            return state.personTabs;
        },
        allSales: state => {
            return state.salesResult
        },
        allParameters: state => {
            return state.parameters
        }
    },
    mutations: {
        salesItem(state, payload) {
            state.parameters[payload].count += 1
        },
        selesResult(state) {
            let result = state.parameters.map(item => (item.count / state.persons.length) * 100)
            state.salesResult = []
            state.salesResult.push(result)
        },
        refreshCount(state) {
            state.parameters.map(item => item.count = 0)
        }
    },
});
