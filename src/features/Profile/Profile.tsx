import React from 'react'

import { withLogin } from '../../utils/withLogin'

export const Profile = withLogin(() => {
  return <h1>Profile</h1>
})
