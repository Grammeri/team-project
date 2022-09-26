import React from 'react'

import { withLogin } from '../../utils/withLogin'

export const Profile = withLogin(() => {
  /*  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn]) // ссылка на переменную*/

  return <h1>Profile</h1>
})
