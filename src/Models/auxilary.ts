

export interface Ivideo {
    id?: number;
    quizs?: Array<Iquiz>;
    ads?: Array<Iads>;
    poster?: string;
    sources?: Array<Isource>;
    tracks?: Array<Itrack>;
    duration?: number;
    _id?: any
}
export interface IweeklyQuiz {
    _id?: any,
    id?: number,
    time?: number,
    questions?: Array<IquizQuestion>,
    
}
interface IquizQuestion {
    question?: number,
    options?: Array<string>,
    answer?: string,
    img?: string

}
export interface Iquiz {
    time?: string;
    questions?: Array<Iquestion>

}
export interface Iquestion {
    quiz?: string;
    option1?: string;
    option2?: string;
    option3?: string;
    option4?: string;
    answer?: string;
    explantion?: string;
}
export interface Iads {
    img?: string;
    time?: string;
}
export interface Isource {
    src?: string;
    size?: string;
}
export interface Itrack {
    kind?: string;
    label?: string;
    srcLang?: string;
    src?: string;
    isDefault?: boolean;

}
