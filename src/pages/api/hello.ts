import openai from "@/utils/openAI";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
}

var { KEYWORD } = require('@/data/data');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const keyword = req.body;
    KEYWORD.keyword = keyword;
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: `Using keyword like ${JSON.stringify(KEYWORD)} to create content in Vietnamese`,
            },
        ],
    });

    const responseText = completion.data.choices[0].message.content;

    res.status(200).json(responseText);

}

