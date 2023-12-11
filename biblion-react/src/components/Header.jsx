import * as img from '@/components/Image';

export default function Header(){
    return (
        <>
            <header className="flex justify-between p-3 bg-[#debcbe] dark:bg-gray-950">
            <div>
                <img.Biblion className="w-20"></img.Biblion>
            </div>
            </header>
        </>
    )
}
