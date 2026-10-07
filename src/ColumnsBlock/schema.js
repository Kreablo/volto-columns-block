import { defineMessages } from 'react-intl';
import { isCustomLayout } from './utils';
import { wrapType } from './wrapType';

const messages = defineMessages({
  labelColumn: {
    id: 'Column',
    defaultMessage: 'Column',
  },
  labelDefault: {
    id: 'Default',
    defaultMessage: 'Default',
  },
  labelColumnTitle: {
    id: 'Column title',
    defaultMessage: 'Column title',
  },
  labelColumnsBlock: {
    id: 'Columns block',
    defaultMessage: 'Columns block',
  },
  labelTitle: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  descrTitle: {
    id: 'Columns block friendly name',
    defaultMessage: 'Columns block friendly name',
  },
  labelColumns: {
    id: 'Columns',
    defaultMessage: 'Columns',
  },
  labelLayout: {
    id: 'Layout',
    defaultMessage: 'Layout',
  },
  labelReverseWrap: {
    id: 'Reverse wrap',
    defaultMessage: 'Reverse wrap',
  },
  reverseWrapDescription: {
    id: 'reverseWrapDescription',
    defaultMessage: 'Reverse column order when opening site on mobile.',
  },
  labelCustomA: {
    defaultMessage: 'Width A',
    id: 'columns-width-a-label',
  },
  labelCustomB: {
    defaultMessage: 'Width B',
    id: 'columns-width-b-label',
  },
  labelCustomC: {
    defaultMessage: 'Width C',
    id: 'columns-width-c-label',
  },
  labelCustomD: {
    defaultMessage: 'Width D',
    id: 'columns-width-d-label',
  },
  labelCenterInMobile: {
    defaultMessage: 'Center in mobile view',
    id: 'columns-center-in-mobile-label',
  },
  descriptionCenterInMobile: {
    defaultMessage: 'Applies to columns with set width',
    id: 'columns-center-in-mobile-description',
  },
  labelAutomaticWidth: {
    defaultMessage: 'Automatic',
    id: 'columns-automatic-label',
  },
});

export const ColumnSchema = (intl) => ({
  title: intl.formatMessage(messages.labelColumn),
  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.labelDefault),
      fields: ['column_title'],
    },
  ],
  properties: {
    column_title: {
      title: intl.formatMessage(messages.labelColumnTitle),
    },
  },
  required: [],
});

export const ColumnsBlockSchema = ({ intl, formData, data }) => {
  const isCustom = isCustomLayout(data);
  const customFields = isCustom
    ? [...data.gridCols, 'wrapType', 'centerInMobile']
    : [];

  return {
    title: intl.formatMessage(messages.labelColumnsBlock),
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.labelDefault),
        fields: ['title', 'data', 'gridCols', ...customFields, 'reverseWrap'],
      },
    ],
    properties: {
      title: {
        title: intl.formatMessage(messages.labelTitle),
        description: intl.formatMessage(messages.descrTitle),
        type: 'string',
      },
      data: {
        title: intl.formatMessage(messages.labelColumns),
        type: 'columns',
        schema: ColumnSchema(intl),
        blockData: formData,
      },
      gridCols: {
        title: intl.formatMessage(messages.labelLayout),
        widget: 'layout_select',
        choices: [],
      },
      reverseWrap: {
        title: intl.formatMessage(messages.labelReverseWrap),
        description: intl.formatMessage(messages.reverseWrapDescription),
        type: 'boolean',
      },
      customA: {
        title: intl.formatMessage(messages.labelCustomA),
        type: 'string',
        placeholder: intl.formatMessage(messages.labelAutomaticWidth),
      },
      customB: {
        title: intl.formatMessage(messages.labelCustomB),
        type: 'string',
        placeholder: intl.formatMessage(messages.labelAutomaticWidth),
      },
      customC: {
        title: intl.formatMessage(messages.labelCustomC),
        type: 'string',
        placeholder: intl.formatMessage(messages.labelAutomaticWidth),
      },
      customD: {
        title: intl.formatMessage(messages.labelCustomD),
        type: 'string',
        placeholder: intl.formatMessage(messages.labelAutomaticWidth),
      },
      centerInMobile: {
        title: intl.formatMessage(messages.labelCenterInMobile),
        description: intl.formatMessage(messages.descriptionCenterInMobile),
        type: 'boolean',
      },
      wrapType: wrapType(intl),
    },
    required: [],
  };
};
