import axios from "axios";


export default class PetShelterService {

    desc = "Покладистый и ласковый с любым человеком, несмотря на то, что «люди» его и расстреляли, все простил. Но очень ревнив к котам. Несмотря на ограниченную подвижность, контролирует всю комнату, зазевался, потерял почтение — получи затрещину"

    data = [
        {
            id: 1,
            name: "Фриман",
            breed: "Бернард",
            age: "3 месяца",
            inoculations: "сделаны",
            diseases: "нет",
            parasites: "нет",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/dog/dog_PNG50366.png"
        },
        {
            id: 2,
            name: "Мурка",
            breed: "Дворняга",
            age: "4 месяца",
            inoculations: "сделаны",
            diseases: "нет",
            parasites: "нет",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/cat/cat_PNG50497.png"
        },
        {
            id: 3,
            name: "Лана",
            breed: "Питбуль",
            age: "1.7 лет",
            inoculations: "сделаны",
            diseases: "нет",
            parasites: "нет",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/dog/dog_PNG50327.png"
        },
        {
            id: 4,
            name: "Рыжик",
            breed: "Норвежский кот",
            age: "3 года",
            inoculations: "сделаны",
            diseases: "нет",
            parasites: "нет",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/cat/cat_PNG50448.png"
        },
        {
            id: 5,
            name: "Мэппо",
            breed: "Австралийская овчарка",
            age: "5 месяцев",
            inoculations: "сделаны",
            diseases: "нет",
            parasites: "нет",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/dog/dog_PNG135.png"
        },
        {
            id: 6,
            name: "Бу",
            breed: "Дворняга",
            age: "2 года",
            inoculations: "сделаны",
            diseases: "нет",
            parasites: "нет",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/cat/cat_PNG50521.png"
        }
    ]

    getPets() {
        const apiUrl = 'http://localhost:8000/api/pets';
        const data = axios.get(apiUrl).then((resp) => {
            return resp.data;
        });
        console.log(
            data
        )
        return data
    };
};
