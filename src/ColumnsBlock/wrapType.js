import { defineMessages } from 'react-intl';

const messages = defineMessages({
  labelWrapType: {
    defaultMessage: 'Wrap',
    id: 'columns-wrap-type-label',
  },
  labelWrapTypeMobile: {
    defaultMessage: 'Mobile only',
    id: 'columns-wrap-type-mobile-label',
  },
  labelWrapTypeNever: {
    defaultMessage: 'Never',
    id: 'columns-wrap-type-never-label',
  },
  placeholderWrapType: {
    defaultMessage: 'Default',
    id: 'columns-wrap-type-placeholder',
  },
});

const wrapChoices = (intl) => {
  return [
    ['mobile', intl.formatMessage(messages.labelWrapTypeMobile)],
    ['never', intl.formatMessage(messages.labelWrapTypeNever)],
  ];
};

export const wrapType = (intl) => ({
  title: intl.formatMessage(messages.labelWrapType),
  type: 'select',
  placeholder: intl.formatMessage(messages.placeholderWrapType),
  choices: wrapChoices(intl),
});
