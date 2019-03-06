
export interface Article {
    id: string;
    name: string;
}
const mockArticles: Article[] = [
    { id: "article1", name: "Sample Article 1" },
    { id: "article2", name: "Sample Article 2" },
    { id: "article3", name: "Sample Article 3" },
    { id: "article4", name: "Sample Article 4" },
    { id: "article5", name: "Sample Article 5" },
    { id: "article6", name: "Sample Article 6" },
    { id: "article7", name: "Sample Article 7" },
    { id: "article8", name: "Sample Article 8" },
];

export function getName(id: string) {
    return "Test Name";
};

export function getDescription(id: string) {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor orci eros, ac molestie lorem dictum nec. Vestibulum sit amet erat est. Morbi luctus sed elit ac luctus. Proin blandit, enim vitae egestas posuere, neque elit ultricies dui, vel mattis nibh enim ac lorem. Maecenas molestie nisl sit amet velit dictum lobortis. Aliquam erat volutpat."
}

export function getRecentArticles(howManyToGet: number) {
    return mockArticles.slice(0,howManyToGet);
}

export function getAllArticles() {
    return mockArticles;
}