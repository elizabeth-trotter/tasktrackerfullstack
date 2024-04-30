import { useRouter } from 'next/navigation';
import React from 'react'

const BoardBarComponent = (props: { title: string, boardColor: string }) => {
    let userColorsArray = [['#57CDFF', '#FF6E6E', '#D59FFF'], ['#D3FF57', '#FFC56E', '#57CDFF'], ['#D59FFF', '#57CDFF', '#513DCC']];

    const router = useRouter();

    const handlePageChange = () => {
      router.push('/BoardPage');
    };

    return (
        <div className={`font-[HammersmithOne] bg-[${props.boardColor}] rounded-md min-h-20 w-3/4 flex justify-between items-center px-5 cursor-pointer`} onClick={handlePageChange}>
            <h1 className='text-2xl'>{props.title.toUpperCase()}</h1>
            <div className='flex gap-2'>
                {
                    props.boardColor == '#AEE6D9' ?
                        <>
                            <div className={`bg-[${userColorsArray[0][0]}] border border-black rounded-full h-8 w-8`}></div>
                            <div className={`bg-[${userColorsArray[0][1]}] border border-black rounded-full h-8 w-8`}></div>
                            <div className={`bg-[${userColorsArray[0][2]}] border border-black rounded-full h-8 w-8`}></div>
                        </>
                        :
                        props.boardColor == '#6FDFC4' ?
                            <>
                                <div className={`bg-[${userColorsArray[1][0]}] border border-black rounded-full h-8 w-8`}></div>
                                <div className={`bg-[${userColorsArray[1][1]}] border border-black rounded-full h-8 w-8`}></div>
                                <div className={`bg-[${userColorsArray[1][2]}] border border-black rounded-full h-8 w-8`}></div>
                            </> :
                            <>
                                <div className={`bg-[${userColorsArray[2][0]}] border border-black rounded-full h-8 w-8`}></div>
                                <div className={`bg-[${userColorsArray[2][1]}] border border-black rounded-full h-8 w-8`}></div>
                                <div className={`bg-[${userColorsArray[2][2]}] border border-black rounded-full h-8 w-8`}></div>
                            </>
                }
            </div>
        </div>
    )
}

export default BoardBarComponent
