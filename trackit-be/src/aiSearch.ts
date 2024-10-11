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

export async function getTokenSentiment() {
  // const chatGPT = new ChatGPTAPI({ apiKey: '' });

  // const model = await loadModel('mistral-7b-openorca.gguf2.Q4_0.gguf', {
  //     verbose: true,
  //     device: 'gpu',
  //     modelConfigFile: "./models3.json"
  // });   

  // const prompt = "{\"tokens\": [{\"coin_type\": \"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH\",\"name\": \"Wrapped Ether\",\"price\": 2500,\"change\": 2.85,\"transaction_timestamp\": \"2024-09-30T09:16:01\",\"transaction_version_created\": 1740927519},{\"coin_type\": \"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC\",\"name\": \"USD Coin\",\"price\": 1,\"change\": 0.05,\"transaction_timestamp\": \"2024-09-30T09:13:22\",\"transaction_version_created\": 1740922012},{\"coin_type\": \"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDD\",\"name\": \"Decentralized USD\",\"price\": 1,\"change\": 0.05,\"transaction_timestamp\": \"2024-09-21T06:54:28\",\"transaction_version_created\": 1713889549},{\"coin_type\": \"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WBTC\",\"name\": \"Wrapped BTC\",\"price\": 64000,\"change\": 1.05,\"transaction_timestamp\": \"2024-09-30T01:55:06\",\"transaction_version_created\": 1740033631}],\"analysis_type\": \"sentiment\",\"criteria\": [\"price_change\",\"transaction_frequency\",\"price_stability\"]}"

  // const response = await createCompletion(model, prompt, { verbose: true })
  const token_sentiment = {
    "tokens": [
      {
        "name": "Fluffy Inu (FLUFFY)",
        "symbol": "FLUFFY",
        "price": 0.00001234,
        "change_24h": 35.4,
        "sentiment": "Bullish",
        "description": "Fluffy Inu has surged by 35.4% in the past 24 hours, attracting a large number of speculative buyers, making it one of the hottest meme coins on Aptos DEX."
      },
      {
        "name": "Aptos Doge (APDOGE)",
        "symbol": "APDOGE",
        "price": 0.0025,
        "change_24h": -12.6,
        "sentiment": "Bearish",
        "description": "Aptos Doge is currently facing a correction, down 12.6% in the past 24 hours. Despite the downturn, it remains popular within the meme coin community on Aptos DEX."
      },
      {
        "name": "Super Shiba (SPSHIBA)",
        "symbol": "SPSHIBA",
        "price": 0.00089,
        "change_24h": 4.7,
        "sentiment": "Neutral",
        "description": "Super Shiba has had a mild increase of 4.7% in price, indicating steady interest among traders on Aptos DEX with moderate activity in the past day."
      },
      {
        "name": "Aptos Moon (APMOON)",
        "symbol": "APMOON",
        "price": 0.015,
        "change_24h": 22.1,
        "sentiment": "Bullish",
        "description": "Aptos Moon has risen by 22.1% in price over the last 24 hours, fueled by a wave of positive sentiment as traders speculate on its moonshot potential."
      }
    ],
    "summary": {
      "overall_sentiment": "Mixed",
      "insights": "The sentiment across the tokens is mixed, with WETH showing bullish signs while stablecoins like USDC and USDD remain largely unaffected by market shifts. WBTC is performing steadily, with no signs of major volatility in the short term."
    }
  }

  const result = shuffleArray(token_sentiment.tokens)

  return result;
}

export async function getTokenIndicator() {
  const indicator = {
    "token_indicators": [
      {
        "name": "Fluffy Inu",
        "symbol": "FLUFFY",
        "price": 0.00001234,
        "volume_24h": 1500000,
        "rsi": 75,
        "moving_average_50d": 0.00001150,
        "moving_average_200d": 0.00000980,
        "signal": "Buy",
        "description": "Fluffy Inu has strong upward momentum with an RSI above 70 and is trading above both 50-day and 200-day moving averages, signaling a potential buying opportunity."
      },
      {
        "name": "Aptos Doge",
        "symbol": "APDOGE",
        "price": 0.0025,
        "volume_24h": 350000,
        "rsi": 40,
        "moving_average_50d": 0.0030,
        "moving_average_200d": 0.0028,
        "signal": "Sell",
        "description": "Aptos Doge is showing a downward trend, with its price below the 50-day moving average and a low RSI, indicating a potential selling signal."
      },
      {
        "name": "Super Shiba",
        "symbol": "SPSHIBA",
        "price": 0.00089,
        "volume_24h": 500000,
        "rsi": 55,
        "moving_average_50d": 0.00090,
        "moving_average_200d": 0.00088,
        "signal": "Hold",
        "description": "Super Shiba is trading near its 50-day moving average with a neutral RSI, suggesting a hold strategy for now."
      },
      {
        "name": "Aptos Moon",
        "symbol": "APMOON",
        "price": 0.015,
        "volume_24h": 1200000,
        "rsi": 82,
        "moving_average_50d": 0.014,
        "moving_average_200d": 0.013,
        "signal": "Strong Buy",
        "description": "Aptos Moon has a very high RSI and is well above both moving averages, signaling strong buying momentum and potential for further growth."
      }
    ]
  }

  const result = shuffleArray(indicator.token_indicators)

  return result
}

export async function getNews() {
  const news = [
    {
      author: "The Block",
      is_positive: false,
      time_created: "Oct 11, 2024",
      content: "$35 million worth of tokens drained from a crypto whale in phishing attack",
    },
    {
      author: "The Block",
      is_positive: true,
      time_created: "Oct 11, 2024",
      content: "MicroStrategy eyes trillion-dollar valuation in bitcoin bank endgame, Michael Saylor tells Bernstein",
    },
    {
      author: "Binance",
      is_positive: false,
      time_created: "Oct 11, 2024",
      content: "Binance Pre-Market is live! Buy & Sell Launchpool tokens before they’re listed. Try now",
    },
    {
      author: "The Block",
      is_positive: false,
      time_created: "Oct 10, 2024",
      content: "EXCLUSIVE: Bitcoin-backed stablecoin developer Yala raises $8 million in seed funding",
    },
    {
      author: "Coinbase",
      is_positive: true,
      time_created: "Oct 9, 2024",
      content: "io․net (IO) is now live on http://coinbase.com & in the Coinbase iOS & Android apps. Coinbase customers can log in to buy, sell, convert, send, receive or store these assets.",
    },
  ]

  const result = shuffleArray(news);

  return result;
}

function shuffleArray(array: any[]) {
  // Create a copy of the input array to avoid modifying the original
  const shuffledArray = [...array];

  // Shuffle the elements using the Fisher-Yates algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]]
      = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;

}