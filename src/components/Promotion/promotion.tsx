import { client } from '../../../sanity/lib/client'
import PromotionSection from './PromotionSection/promotionSection'

const Promotion = async () => {
    const data:IPromotion[] = await client.fetch(`*[_type == "promotion" ]{
        _id,
        title,
        description,
        expiryDate,
        "PromotionImage": image[].asset->url
    }
    `)
    return (
        <>
        <PromotionSection promotion={data}/>
        </>
    )
}

export default Promotion