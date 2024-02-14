import React, { useEffect, useState } from 'react'
import { getCategory } from '../GetData/getCategory'
import { useFilter } from '../Filter/filter'
import { Checkbox } from './checkBox'

const Filter = () => {
    const [data, setData] = useState<ICategory[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            const fdata = await getCategory()
            setData(fdata)
        }
        fetchData()
    },[ data])
    const {categoryFilter,setCategoryFilter} = useFilter()
    const handleCategoryFilter = (id:string)=>{
        if(categoryFilter.includes(id)){
            const updateCategory = categoryFilter.filter((category)=>category !== id)
            setCategoryFilter(updateCategory)
        }else{
            setCategoryFilter([...categoryFilter,id])
        }
    }
    return (
        <section className='sm:mt-10 flex flex-row sm:flex-col gap-10 sm:gap-5 mt-4'>
            <div>
                <h6 className={"whitespace-nowrap text-xl font-semibold"}>Product Categories</h6>
                <div className={"flex flex-row sm:flex-col gap-4 mt-5"}>
                    {data.map((category)=>{
                        const isSelected = categoryFilter.includes(category._id)
                        return(
                            <Checkbox
                            key={category._id}
                            isSelected={isSelected}
                            value={category._id}
                            label={category.name}
                            onClickHandler={handleCategoryFilter}
                            />
                        )
                        })}
                </div>
            </div>
        </section>
    )
}

export default Filter