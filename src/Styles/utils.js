const getSide = (side, v) => {
  const v_unit = v.unit ? v.unit : 'px';
  return `${v?.[side] ? `${v[side]}${v_unit}` : '0'}`;
};

const getSides = (v) => {
  if (!v) return null;
  return `${getSide('top', v)} ${getSide('right', v)} ${getSide(
    'bottom',
    v,
  )} ${getSide('left', v)}`;
};

export function getStyle(props) {
  const { settings, columnType, data } = props;
  const isCustomStyle = columnType?.startsWith('custom');
  const size = data?.[columnType];
  const hasSize = !!size;

  let additionalStyle = {};
  const styleClass = '';

  if (isCustomStyle) {
    additionalStyle = {
      flexBasis: size ?? 'auto',
      flexGrow: hasSize ? 0 : 1,
      [`--${columnType}`]: size,
    };
  }

  return [{
    style: {
      verticalAlign: settings?.grid_vertical_align,
      backgroundColor: settings?.backgroundColor,
      padding: getSides(settings?.padding),
      width: `var(--${columnType})`,
      ...additionalStyle,
    },
  }, styleClass];
}
