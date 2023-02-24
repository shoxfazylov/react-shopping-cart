import { createTheme } from '@mui/material/styles'
import MuiStepConnector from '@mui/material/StepConnector'

import CheckboxCheckedIcon from 'public/icons/checkbox-checked.svg'
import RadioIcon from 'public/icons/radio.svg'
import RadioActiveIcon from 'public/icons/radio-active.svg'
import RatingFilled from 'public/icons/rating/filled.svg'
import RatingEmpty from 'public/icons/rating/empty.svg'
import SignRightIcon from 'public/icons/arrows/sign-right.svg'

const typography = {
  fontFamily: ['TTCommons', 'Roboto', 'Arial', 'sans-serif'].join(','),
  htmlFontSize: 16,

  h1: {
    fontFamily: 'TTCommons',
    fontWeight: 700,
    fontSize: 50,
    lineHeight: '55px'
  },

  h2: {
    fontFamily: 'Stolzl',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '34px'
  },

  h4: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '26px'
  },

  h5: {
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '22px'
  },

  body1: {
    fontSize: 16,
    lineHeight: '20px'
  },
  body2: {
    fontSize: 18,
    lineHeight: '22px'
  }
}

export const muiTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiTypography: {
      defaultProps: {
        noWrap: true
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        classes: {
          root: 'button',
          outlined: 'button-outlined',
          endIcon: 'button-end-icon',
          text: 'button-text',
          startIcon: 'button-start-icon'
        }
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        classes: {
          root: 'autocomplete',
          inputRoot: 'autocomplete-input-root',
          hasPopupIcon: 'autocomplete-has-popup-icon',
          input: 'autocomplete-input',
          popper: 'autocomplete-popper',
          paper: 'autocomplete-paper',
          listbox: 'autocomplete-listbox',
          focused: 'autocomplete-focused',
          inputFocused: 'autocomplete-focused'
        },
        disablePortal: true
      }
    },
    MuiTextField: {
      defaultProps: {
        classes: {
          root: 'text-field-root'
        },
        InputLabelProps: {
          classes: {
            root: 'text-field-label',
            focused: 'text-field-label-focused',
            shrink: 'text-field-label-shrink',
            error: 'text-field-label-error'
          }
        },
        InputProps: {
          classes: {
            root: 'text-field-input-root',
            input: 'text-field-input',
            error: 'text-field-input-error'
          }
        }
      }
    },
    MuiTabs: {
      defaultProps: {
        classes: {
          scroller: 'tabs-scroller',
          flexContainer: 'tabs-flex-container',
          indicator: 'tabs-indicator'
        }
      }
    },
    MuiTab: {
      defaultProps: {
        classes: {
          selected: 'tab-selected'
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        icon: undefined,
        checkedIcon: <CheckboxCheckedIcon />
      }
    },
    MuiRadio: {
      defaultProps: {
        icon: <RadioIcon />,
        checkedIcon: <RadioActiveIcon />
      }
    },
    MuiStepper: {
      defaultProps: {
        connector: (
          <MuiStepConnector
            classes={{ root: 'step-connector-root', line: 'step-connector-line' }}
          />
        )
      }
    },
    MuiStep: {
      defaultProps: {
        classes: {
          completed: 'step-completed'
        }
      }
    },
    MuiStepLabel: {
      defaultProps: {
        classes: {
          iconContainer: 'step-label-icon-container',
          label: 'step-label',
          active: 'step-label-active',
          completed: 'step-label-completed'
        },
        StepIconProps: {
          classes: {
            root: 'step-label-icon',
            active: 'step-label-icon-active',
            completed: 'step-label-icon-completed',
            text: 'step-label-icon-text'
          }
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        classes: {
          select: 'select',
          icon: 'select-icon',
          iconOpen: 'select-icon-open'
        },
        IconComponent: (props) => <SignRightIcon {...props} />,
        MenuProps: {
          classes: {
            paper: 'select-menu-paper',
            list: 'select-menu-list'
          },
          disablePortal: true
        },
        inputProps: {}
      }
    },
    MuiInputLabel: {
      defaultProps: {
        classes: {
          shrink: 'input-label-shrink',
          filled: 'input-label-filled',
          focused: 'input-label-focused'
        }
      }
    },
    MuiMenuItem: {
      defaultProps: {
        classes: {
          selected: 'menu-item-selected'
        }
      }
    },
    MuiRating: {
      defaultProps: {
        emptyIcon: <RatingEmpty />,
        icon: <RatingFilled />
      }
    },
    MuiCircularProgress: {
      defaultProps: {
        classes: {
          root: 'circular-progress'
        }
      }
    },
    MuiInputAdornment: {
      defaultProps: {
        classes: {
          root: 'input-adornment'
        }
      }
    },
    MuiChip: {
      defaultProps: {
        classes: {
          root: 'chip',
          label: 'chip-label',
          deleteIcon: 'chip-delete-icon'
        }
      }
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true
      }
    },
    MuiAccordionSummary: {
      defaultProps: {
        classes: {
          content: 'accordion-summary-content',
          expanded: 'accordion-summary-expanded',
          expandIconWrapper: 'accordion-expand-icon-container'
        }
      }
    },
    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
        classes: {
          thumb: 'switch-thumb',
          switchBase: 'switch-base',
          track: 'switch-track',
          checked: 'switch-checked'
        }
      }
    },
    MuiFormGroup: {
      defaultProps: {
        classes: {
          root: 'form-group'
        }
      }
    },
    MuiDrawer: {
      defaultProps: {
        classes: {
          root: 'drawer'
        }
      }
    }
  },
  typography
})
