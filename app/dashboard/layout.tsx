const AuthenticatedDashboard = async ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2 border-4 px-4">
        <h1 className="text-xl font-semibold text-foreground">
          Dashboard
        </h1>
      </header>

      <main className="flex-1 overflow-auto p-4 md:p-6">
        {children}
      </main>
    </div>
  )
}

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <AuthenticatedDashboard>
        {children}
    </AuthenticatedDashboard>
  )
};

export default DashboardLayout;