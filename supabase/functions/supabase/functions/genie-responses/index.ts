import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from '../_shared/cors.ts';

const genieResponses = {
  en: [
    "I shall grant thee three wishes, but beware, for they may not be as you expect.",
    "Your wish is my command, but remember - I am bound by the laws of magic.",
    "I am the genie of the lamp, and I shall fulfill your desires... within reason.",
    "Your wish is granted, but consider carefully what you truly desire.",
    "I am bound to serve, but my magic has limits - choose your words wisely.",
    "Your wish is granted, but remember - magic comes with consequences.",
    "I am the spirit of the lamp, and I shall fulfill your wishes... with a twist.",
    "Your wish is granted, but the path to fulfillment may be unexpected.",
    "I am the genie, and I shall grant your wish... but not without a price.",
    "Your wish is granted, but the outcome may surprise you.",
    "I am the master of magic, and I shall fulfill your desires... with a twist.",
    "Your wish is granted, but the journey may be more interesting than the destination.",
    "I am the genie, and I shall grant your wish... but the result may be unexpected.",
    "Your wish is granted, but the path may be more challenging than you imagined.",
    "I am the spirit of the lamp, and I shall fulfill your desires... with a surprise.",
    "Your wish is granted, but the outcome may be more than you bargained for.",
    "I am the genie, and I shall grant your wish... but the consequences may be unforeseen.",
    "Your wish is granted, but the journey may be more enlightening than you expected.",
    "I am the master of magic, and I shall fulfill your desires... with a twist of fate.",
    "Your wish is granted, but the result may be more magical than you imagined."
  ],
  es: [
    "Te concederé tres deseos, pero ten cuidado, pues pueden no ser como esperas.",
    "Tu deseo es mi mandato, pero recuerda - estoy atado por las leyes de la magia.",
    "Soy el genio de la lámpara, y cumpliré tus deseos... dentro de lo razonable.",
    "Tu deseo es concedido, pero considera cuidadosamente lo que realmente deseas.",
    "Estoy obligado a servir, pero mi magia tiene límites - elige tus palabras sabiamente.",
    "Tu deseo es concedido, pero recuerda - la magia tiene consecuencias.",
    "Soy el espíritu de la lámpara, y cumpliré tus deseos... con un giro.",
    "Tu deseo es concedido, but el camino hacia la realización puede ser inesperado.",
    "Soy el genio, y concederé tu deseo... pero no sin un precio.",
    "Tu deseo es concedido, pero el resultado puede sorprenderte.",
    "Soy el maestro de la magia, y cumpliré tus deseos... con un giro.",
    "Tu deseo es concedido, pero el viaje puede ser más interesante que el destino.",
    "Soy el genio, y concederé tu deseo... pero el resultado puede ser inesperado.",
    "Tu deseo es concedido, pero el camino puede ser más desafiante de lo que imaginaste.",
    "Soy el espíritu de la lámpara, y cumpliré tus deseos... con una sorpresa.",
    "Tu deseo es concedido, pero el resultado puede ser más de lo que bargañaste.",
    "Soy el genio, y concederé tu deseo... pero las consecuencias pueden ser inesperadas.",
    "Tu deseo es concedido, pero el viaje puede ser más iluminador de lo que esperabas.",
    "Soy el maestro de la magia, y cumpliré tus deseos... con un giro del destino.",
    "Tu deseo es concedido, pero el resultado puede ser más mágico de lo que imaginaste."
  ]
};

// Function to get a random genie response from a given language
function getRandomGenieResponse(language: string): string {
  const languageResponses = genieResponses[language as keyof typeof genieResponses];
  if (!languageResponses) {
    throw new Error(`Unsupported language: ${language}`);
  }
  return languageResponses[Math.floor(Math.random() * languageResponses.length)];
}

// This is a serverless function that receives a POST request and returns a random genie response.
serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders
    });
  }

  try {
    // Parse the request body
    const { language = 'en' } = await req.json();

    // Generate a random genie response
    const response = getRandomGenieResponse(language);

    // Return the excuse with CORS headers
    return new Response(JSON.stringify({ response }), {
      headers: { 
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 200
    });
  } catch (error) {
    // Handle any errors
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 400
    });
  }
});
