import { getToken } from "../utils/cookies";

export default async function createGroup(userData: any) {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: getToken || "",
            },
            body: JSON.stringify(userData),
        };

        const url: string = process.env.REACT_APP_GROUP_LOCAL as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return { status: res.status };
        }

        const data = await res.json();

        return { status: res.status, data: data };
    } catch (err) {
        alert("Houve um erro ao criar o grupo. Por favor tente novamente!");
        console.error(err);
    }
}
