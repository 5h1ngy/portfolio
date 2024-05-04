import { faker } from '@faker-js/faker';
import _ from 'lodash';

function _mockGetNFS(path) {
    const currentDate = new Date();

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const getRandomDate = () => {
        const pastDate = new Date(currentDate);
        pastDate.setDate(currentDate.getDate() - Math.floor(Math.random() * 365)); // Date casuali nell'ultimo anno
        return pastDate.toISOString();
    };

    const getRandomName = () => {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        const length = Math.floor(Math.random() * 10) + 5; // Lunghezza casuale del nome
        let name = '';
        for (let i = 0; i < length; i++) {
            name += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return name;
    };

    const getRandomExtension = (path) => {
        if (/home/gm.test(path)) {
            return _.sample(['.txt', '.doc', '.xls'])
        } else if (/documents/gm.test(path)) {
            return _.sample(['.txt', '.doc'])
        } else if (/images/gm.test(path)) {
            return _.sample(['.jpg', '.png'])
        } else if (/music/gm.test(path)) {
            return _.sample(['.mp3', '.mp4', '.wav'])
        } else if (/work/gm.test(path)) {
            return _.sample(['.doc', 'xls', '.jpg', '.png', '.mp3', '.mp4', '.wav'])
        }
    }

    const getRandomSize = (type) => {

        function getRandomFloat(min, max) {
            return Math.random() * (max - min) + min;
        }

        if (type === '.txt' || type === '.doc' || type === 'xls') {
            return getRandomFloat(5, 30)
        } else if (type === '.jpg' || type === '.png') {
            return getRandomFloat(4, 15)
        } else if (type === '.mp3' || type === '.mp4' || type === '.wav') {
            return getRandomFloat(40, 200)
        }
    };

    const getRandomType = () => {
        return _.sample(['FILE', 'DIRECTORY']);
    };

    const generateItem = () => {
        const type = getRandomType();
        const extensions = type === 'FILE'
            ? getRandomExtension(path)
            : '';

        return {
            lastModifyDate: getRandomDate(),
            name: getRandomName() + extensions,
            type: type,
            size: type === 'FILE' ? getRandomSize(type) : 0 // La dimensione è 0 per le cartelle
        };
    };

    return {
        folder: path,
        items: Array.from({ length: getRandomInt(50, 100) }).map(() => generateItem())
    };
}


export function getNFS(path) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            try {
                resolve(_mockGetNFS(path))
            } catch (error) {
                reject(error)
            }
        }, 1000)
    })
}