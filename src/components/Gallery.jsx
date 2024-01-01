import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import soh from '@/images/soh.jpg'

const people = [
  {
    name: 'String of Hearts',
    title: 'Heart Shaped Leaves',
    role: 'Hearts',

  },
  {
  // More people...
  name: 'String of Pearls',
    title: 'Pretty Pearls',
    role: 'Pearls',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
  // More people...
  name: 'Monstera',
    title: 'The Friendliest Monster(a)',
    role: 'Monstera',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    // More people...
    name: 'Donkey Tail',
      title: 'A Curly Cutie',
      role: 'Donkey Tail',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    ]

export default function Gallery() {
  return (
    <div className='bg-gradient-to-r from-violet-400 to-fuchsia-500'> 
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-3 p-3 mb-0">
        {people.map((person) => (
            <li
            key={person.email}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
            <div className="flex flex-1 flex-col p-8">
                <img className="mx-auto h-70 w-70 flex-shrink-0 rounded-md" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-sm font-medium text-slate-900">{person.name}</h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-slate-500">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {person.role}
                    </span>
                </dd>
                </dl>
            </div>
            </li>
        ))}
        </ul>
    </div>
  )
}
