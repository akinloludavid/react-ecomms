import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRoutes, useLocation } from 'react-router-dom'
import { customTheme } from '../styles/theme'
import { PUBLIC_ROUTES } from './publicRoutes'

const AppWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES)
  return routes
}

const Pages = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount:false,
        refetchOnReconnect:true,
        refetchOnWindowFocus:false,
        refetchInterval:600_000,
        retry:2
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <AppWrapper key={location.pathname} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default Pages
