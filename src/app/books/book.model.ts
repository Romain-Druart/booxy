export interface IBook {
    title?: string;
    language?: string;
    cover?: string;
    rights?: string;
    subject?: string[];
    _formatted?: {
        title?: string,
        language?: string;
        cover?: string;
        rights?: string;
        subject?: string[];
    }
    id?: number;
    download?: number;
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