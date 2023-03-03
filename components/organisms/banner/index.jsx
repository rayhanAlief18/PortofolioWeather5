import SayHi from './sayHi';
import DescMe from './DescMe';
import MySkill from './MySkill';

export default function Index() {
    return (
        <>
        <div className='scroll-smooth bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-stone-900 to-gray-900'>
            <div className="min-h-screen w-full">
                <SayHi/>    
                <div className='flex flex-col gap-10 justify-center'>
                    <DescMe />
                    <MySkill />
                    {/* <Bio /> */}
                </div>
            </div>
        </div>
        </>
    );
}