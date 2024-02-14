import Link from 'next/link'
import CategoryCard from './CategoryCard/categoryCard'

const Categories = async () => {
    return (
        <section className="flex flex-col gap-10 my-5">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">Shop by Categories</h3>
                <Link href="/products" className='text-xl'>Show All</Link>
            </div>
                <CategoryCard />
        </section>
    )
}

export default Categories