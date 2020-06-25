import { get, has, sample, sampleSize } from 'lodash';
import companies from './data/companies';
import {
    bigCities,
    complicatedHouseholdProducts,
    countries,
    emergingTechnologies,
    landmarks
} from './data/misc';

function buildQuestion(q) {
    const question = get(q, 'question');
    if (has(q, 'useVariables')) {
        const company = sample(companies());
        const companyName = get(company, 'name');
        const companyProduct = sample(get(company, 'products'));
        return question
            .replace('__companyName__', companyName)
            .replace('__companyProduct__', companyProduct)
            .replace('__landmark__', sample(landmarks))
            .replace('__complicatedHouseholdProduct__', sample(complicatedHouseholdProducts))
            .replace('__bigCity__', sample(bigCities))
            .replace('__country__', sample(countries))
            .replace('__emergingTechnology__', sample(emergingTechnologies));
    }
    return question;
}

export function buildInterview(q) {
    return [
        get(q, 'courtesy.opener[0]'),
        ...sampleSize(get(q, 'general.general'), 4),
        ...sampleSize(get(q, 'communication.leadership'), 2),
        ...sampleSize(get(q, 'communication.behavioral'), 2),
        ...sampleSize(get(q, 'communication.conflict'), 2),
        ...sampleSize(get(q, 'product.design'), 5),
        ...sampleSize(get(q, 'product.strategy'), 5),
        ...sampleSize(get(q, 'technical.general'), 4),
        ...sampleSize(get(q, 'technical.analysis'), 2),
        ...sampleSize(get(q, 'technical.engineering'), 2),
        ...get(q, 'courtesy.closer'),
    ].map(s => buildQuestion(s))
};
