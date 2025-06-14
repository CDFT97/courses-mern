export class UserResource {
  /**
   * Transforma un usuario individual
   * @param {Object} user - Modelo de usuario
   * @returns {Object} Usuario formateado
   */
  static make(user) {
    if (!user) return null;

    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      active: user.active,
    };
  }

  /**
   * Transforma una colección de usuarios
   * @param {Array} users - Array de modelos de usuario
   * @returns {Array} Colección formateada
   */
  static collection(users) {
    if (!Array.isArray(users)) return [];

    return users.map((user) => this.make(user));
  }
}
