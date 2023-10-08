var azOpenAiSettings = {
    "chatApiUrl": "https://<name>.openai.azure.com/openai/deployments/$model$/chat/completions?api-version=2023-07-01-preview",
    "models": {
        "<deploy-model-name>": "<token-limit>",
        "GPT35-16K": 16384, 
        "GPT4-32K": 32768
    }
};