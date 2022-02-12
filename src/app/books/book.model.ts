export interface IBook {
    title?: string;
    language?: string;
    cover?: string;
    rights?: string;
    subject?: string[];
}

export interface ISearchHits {
    exhaustiveNbHits?: boolean;
    hits?: IBook[];
    limit?: number;
    nbHits?: number;
    offset?: number;
    processingTimeMs?: number;
    query?: string;
}