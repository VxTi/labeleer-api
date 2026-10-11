import {
  addLocale,
  createAccessToken,
  deleteLocale,
  deleteTranslation,
  deleteTranslations,
  exportTranslations,
  generateTranslations,
  getLocales,
  getProjects,
  getTranslation,
  getTranslations,
  getTranslationTags,
  getUserProjectPermissions,
  inviteUserToProject,
  removeUserFromProject,
  renameTranslationKey,
  revokeAccessToken,
  updateAccessToken,
  updateReferenceLocale,
  updateTranslations,
  updateTranslationTags,
  updateUserPermissions,
} from './generated/index.js';

const wrapper = {
  projects: {
    get: getProjects,
  },
  project: {
    collaborators: {
      invite: inviteUserToProject,
      remove: removeUserFromProject,
      permissions: {
        get: getUserProjectPermissions,
        set: updateUserPermissions,
      },
    },
    translations: {
      get: getTranslations,
      update: updateTranslations,
      delete: deleteTranslations,
      export: exportTranslations,
      locales: {
        reference: { set: updateReferenceLocale },
        add: addLocale,
        get: getLocales,
        delete: deleteLocale,
      },
    },
    translation: {
      generate: generateTranslations,
      get: getTranslation,
      delete: deleteTranslation,
      key: {
        rename: renameTranslationKey,
      },
      tags: {
        update: updateTranslationTags,
        get: getTranslationTags,
      },
    },
    accessToken: {
      create: createAccessToken,
      revoke: revokeAccessToken,
      permissions: {
        set: updateAccessToken,
      },
    },
  },
};

export default wrapper;
