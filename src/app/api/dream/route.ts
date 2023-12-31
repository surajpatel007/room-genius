import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
  });

//   export async function POST(req: Request) {
//     const { imageUrl, theme, room } = await req.json();
    

//     const output = await replicate.run(
//       "alaradirik/t2i-adapter-sdxl-depth-midas:3263801326d7bf368327b89980371f634086e6bbbf734d9a2943cb516dd8209d",
//       {
//         input: {
//           image: imageUrl,
//           prompt: `A photo of a ${theme} ${room}, 4k photo, highly detailed`,
//         },
//       }
//     );


//     return NextResponse.json(output);

// }
export async function POST(request: Request) {
  const req = await request.json();
  const { imageUrl, theme, room } = req;

  const initResponse = await fetch('https://api.replicate.com/v1/predictions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN}`,
		},
		body: JSON.stringify({
			version:
				'435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117',
			input: {
				image: imageUrl,
				prompt: `A photo of a ${theme} ${room}, 4k photo, highly detailed`,
            // room === 'Gaming Room'
						// ? 'a room for gaming with gaming computers, gaming consoles, and gaming chairs'
						// : room
						// ? `a ${theme.toLowerCase()} ${room.toLowerCase()}`
						// : `a ${theme.toLowerCase()} ${room.toLowerCase()}`,
				a_prompt:
					'best quality, extremely detailed, photo from Pinterest, interior, cinematic photo, ultra-detailed, ultra-realistic, award-winning',
				n_prompt:
					'longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality',
			},
		}),
	})

  const initResponseJson = await initResponse.json();
  const { id } = initResponseJson;
  let predictedImageUrls = null;

  while (!predictedImageUrls) {
		let imageResponse = await fetch(
			`https://api.replicate.com/v1/predictions/${id}`,
			{
				headers: {
					Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN}`,
				},
			},
		)

    let imageResponseJson = await imageResponse.json();
    console.log('imageResponseJson', JSON.stringify(imageResponseJson));
    if (imageResponseJson.status === 'succeeded') {
			predictedImageUrls = imageResponseJson.output
		} else if (imageResponseJson.status === 'failed') {
			throw new Error('Image generation failed')
		} else {
			await new Promise(resolve => setTimeout(resolve, 2000))
		}
	}

  // return the image
	console.log('predictedImageUrl', predictedImageUrls)
	return NextResponse.json({
		predictedImageUrl: predictedImageUrls[1] ?? 'Failed to generate image',
	})

}