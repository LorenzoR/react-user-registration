import Repository from './Repository';

import User from '../models/User';

class RegistrationService {
  public static register(user: User) {
    return Repository.post('/register', { user });
  }
}

export default RegistrationService;
