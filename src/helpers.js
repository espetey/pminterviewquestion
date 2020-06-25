import { get, has, sample, sampleSize } from 'lodash';
import companies from './data/companies';

function buildQuestion(q) {
    const question = get(q, 'question');
    if (has(q, 'useVariables')) {
        const company = sample(companies());
        const companyName = get(company, 'name');
        const companyProduct = sample(get(company, 'products'));
        return question.replace(`__companyName__`, companyName).replace(`__companyProduct__`, companyProduct);
    }
    return question;
}

export function buildInterview(q) {
    return [
        get(q, 'courtesy.opener[0]'),
        ...sampleSize(get(q, 'general.general'), 4),
        ...sampleSize(get(q, 'communication.leadership'), 4),
        ...sampleSize(get(q, 'communication.behavioral'), 4),
        ...sampleSize(get(q, 'communication.conflict'), 4),
        ...sampleSize(get(q, 'product.design'), 4),
        ...sampleSize(get(q, 'product.strategy'), 4),
        ...sampleSize(get(q, 'technical.general'), 4),
        ...sampleSize(get(q, 'technical.analysis'), 4),
        ...sampleSize(get(q, 'technical.engineering'), 4),
        ...get(q, 'courtesy.closer'),
    ].map(s => buildQuestion(s))
};
