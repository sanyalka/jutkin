// Декоратор-обертка для логгирования методов класса 
function logged(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Called ${key} with`, args);
    return originalMethod.apply(this, args);
  }

  return descriptor;
}

// Интерфейс для описания данных пользователя
interface User {
  id: number;
  name: string;
  email: string;
}

// Класс репозитория пользователей
class UserRepository {

  // Защищенное поле для хранения пользователей
  protected users: User[] = [];

  // Метод для поиска пользователя по id
  @logged
  findUserById(id: number) {
    return this.users.find(u => u.id === id); 
  }

  // Метод для сохранения пользователя
  @logged
  saveUser(user: User) {
    this.users.push(user);
  }

}

// Фабрика для создания репозитория пользователей
function createUserRepository() {
  return new UserRepository();
}

// Использование репозитория 
const repo = createUserRepository();

repo.saveUser({id: 1, name: "John", email: "john@mail.com"});
repo.findUserById(1);
