import Head from "next/head";
import { FAVICON_URL, SITE_TITLE } from "../../data/constants";
import { useLang } from "../../utils/lang";

export default function AppHead({
    title = SITE_TITLE,
    description,
    imageUrl = FAVICON_URL,
    type = "website",
}) {
    const { siteDescription } = useLang("common");

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>{title}</title>
            <meta name="description" content={description ?? siteDescription} />

            <link rel="icon" href={FAVICON_URL} sizes="32x32" />
            <link rel="icon" href={FAVICON_URL} sizes="192x192" />
            <link rel="apple-touch-icon" href={FAVICON_URL} />
            <meta name="msapplication-TileImage" content={FAVICON_URL} />
            <meta name="robots" content="index, follow" />

            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
            <link href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet"></link>

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description ?? siteDescription} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:type" content={type} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description ?? siteDescription} />
            <meta name="twitter:image" content={imageUrl} />

            {/* <meta property="og:url" content={url} />
            <meta property="og:site_name" content={siteName} />
            {imageWidth && <meta property="og:image:width" content={imageWidth} />}
            {imageWidth && <meta property="og:image:height" content={imageHeight} />}
            <meta property="og:locale" content={locale} />
            {localeAlternates.map((element, index) => {
                return <meta key={index} property="og:locale:alternate" content={element} />
            })} */}

        </Head>
    );
}

