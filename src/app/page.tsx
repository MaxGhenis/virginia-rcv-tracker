import { Dashboard } from '@/components/Dashboard'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Virginia RCV Support Tracker
          </h1>
          <p className="mt-2 text-gray-600">
            Track Virginia state elected officials&apos; positions on Ranked Choice Voting
          </p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Dashboard />
      </main>
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>
            Data sources: Virginia General Assembly, FairVote Virginia, public records
          </p>
          <p className="mt-2">
            <a
              href="https://github.com/maxghenis/virginia-rcv-tracker"
              className="text-blue-600 hover:underline"
            >
              View source on GitHub
            </a>
            {' | '}
            <a
              href="https://www.fairvoteva.org"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              FairVote Virginia
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
