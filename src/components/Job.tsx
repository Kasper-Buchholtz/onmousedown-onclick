import Link from 'next/link';
type jobType = {
    title: string;
    location: string;
    path: any;
};

export function Job({ title, location, path }: jobType) {
    return (
        <li className=" ">
            <Link className="bg-light p-8 rounded-md flex" href={path}>
                <div className="flex gap-20 w-1/3">
                    <h2 className='w-1/2'>{title}</h2>
                    <p className='w-1/3'>{location}</p>
                </div>
            </Link>
        </li>
    );
}

export default Job;
