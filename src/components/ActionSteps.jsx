import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

const timeline = [
  {
    id: 1,
    target: "Choose Leaf Style",
    icon: CheckIcon,
    iconBackground: "bg-green-400",
  },
  {
    id: 2,
    target: "Choose Leaf Color",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 3,
    target: "Choose Planter Color",
    icon: CheckIcon,
    iconBackground: "bg-green-600",
  },
  {
    id: 4,
    target: "Hanging or Sitting Plant?",
    href: "#",
    icon: CheckIcon,
    iconBackground: "bg-green-700",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ActionSteps() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-3 p-3 mb-0 place-content-center">
      <div className="rounded-xl bg-white/15 ring-1 ring-inset ring-white/15">
        <div className="px-3 py-10 sm:py-32 lg:px-8">
          <div className="max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl">
              Choose Your Plant
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-800">
              Customize a plant to your unique style
            </p>
          </div>

          <div className="flow-root mt-7">
            <ul role="list" className="p-2 m-3 content-center">
              {timeline.map((event, eventIdx) => (
                <li key={event.id}>
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span
                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={classNames(
                            event.iconBackground,
                            "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                          )}
                        >
                          <event.icon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-violet-500">
                            {event.content}{" "}
                            <a
                              href={event.href}
                              className="font-medium text-gray-900"
                            >
                              {event.target}
                            </a>
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-slate-700">
                          <time dateTime={event.datetime}>{event.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
