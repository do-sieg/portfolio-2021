
export function getSubjects(locale) {
    return require(`/data/learn_subjects_${locale}`).learnSubjects;
}

export function getSubject(locale, subjectId) {
    return getSubjects(locale)[subjectId];
}
