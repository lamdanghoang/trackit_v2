import { createCompletion, loadModel } from 'gpt4all';

export async function getAIInsights(prompt: string) {
    // const chatGPT = new ChatGPTAPI({ apiKey: '' });

    const model = await loadModel('mistral-7b-openorca.gguf2.Q4_0.gguf', {
        verbose: true,
        device: 'gpu',
        modelConfigFile: "./models3.json"
    });   

    const response = await createCompletion(model, prompt, { verbose: true })

    return response;
}