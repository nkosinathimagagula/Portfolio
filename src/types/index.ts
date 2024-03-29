export type navBarTab = {
    id: string;
    title: string;
}

export type interest = {
    name: string;
    icon: string;
}

export type experience = {
    title: string;
    company_name: string;
    icon: string;
    date: string;
    points: string[];
}

type language = {
    name: string;
    color: string;
}
export type project = {
    name: string;
    description: string;
    image: string;
    source_code_link: string;
    languages: language[];
}

export type skill = {
    name:string;
    icon: string;
}

export type education = {
    name: string;
    location: string;
    icon: string;
    qualification: string;
    graduation_year: string;
    years: string;
}

export type formData = {
    name: string;
    email: string;
    message: string;
}


export type certification = {
    name: string;
    icon: string;
    link: string;
}
