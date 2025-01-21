interface SecData {
    image: string;
    title: string;
    price: number;
}

const secData: SecData[] = [
    {
        image: "/shortsec/modulasofa.png",
        title: "Trenton Modular Sofa_3",
        price: 25000
    },
    {
        image : "/shortsec/granitediningtable.png",
        title : "Granite Dining Table With Dining Chair",
        price : 25000
    },
    {
        image : "/shortsec/Outdoorbartable.png",
        title : "Out Door Bar Table & Stool", 
        price : 25000
    },
    {
        image : "/shortsec/Plainconsole.png",
        title : "Plain Console With Teak Mirror",
        price : 25000
    }
]

export { secData} 
export type {SecData}