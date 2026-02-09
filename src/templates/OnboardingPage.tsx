import React from 'react';
import { Box, TextField, Button, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
import { Stepper, Step, StepLabel } from '../stories/Stepper';
import { MobileStepper } from '../stories/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export interface OnboardingStep {
  label: string;
  content: React.ReactNode;
}

export interface OnboardingPageProps {
  steps: OnboardingStep[];
  activeStep?: number;
  onNext?: () => void;
  onBack?: () => void;
  onSkip?: () => void;
  onComplete?: () => void;
  loading?: boolean;
  allowSkip?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

export const OnboardingPage: React.FC<OnboardingPageProps> = ({
  steps,
  activeStep = 0,
  onNext,
  onBack,
  onSkip,
  onComplete,
  loading = false,
  allowSkip = false,
  orientation = 'horizontal',
}) => {
  const isLastStep = activeStep === steps.length - 1;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (orientation === 'vertical') {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100', p: 2 }}>
        <Box sx={{ width: '100%', maxWidth: 1000, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {!isMobile && (
            <Stepper activeStep={activeStep} orientation="vertical" sx={{ minWidth: { xs: 'auto', md: 250 }, bgcolor: 'transparent' }}>
              {steps.map((step) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          )}

          <Paper sx={{ flex: 1, p: { xs: 2, sm: 4 } }}>
            <Box sx={{ minHeight: 300, mb: 4, position: 'relative' }}>
              {isMobile && allowSkip && !isLastStep && (
                <Button onClick={onSkip} disabled={loading} size="small" sx={{ position: 'absolute', top: 0, right: 0 }}>
                  Skip
                </Button>
              )}
              {steps[activeStep]?.content}
            </Box>

            {isMobile ? (
              <MobileStepper
                variant="progress"
                steps={steps.length}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button size="small" onClick={isLastStep ? onComplete : onNext} disabled={loading}>
                    {loading ? 'Processing...' : isLastStep ? 'Complete' : 'Next'}
                    <KeyboardArrowRight />
                  </Button>
                }
                backButton={
                  <Button size="small" onClick={onBack} disabled={activeStep === 0 || loading}>
                    <KeyboardArrowLeft />
                    Back
                  </Button>
                }
              />
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button
                  onClick={onBack}
                  disabled={activeStep === 0 || loading}
                  sx={{ visibility: activeStep === 0 ? 'hidden' : 'visible' }}
                >
                  Back
                </Button>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  {allowSkip && !isLastStep && (
                    <Button onClick={onSkip} disabled={loading}>
                      Skip
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={isLastStep ? onComplete : onNext}
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : isLastStep ? 'Complete' : 'Next'}
                  </Button>
                </Box>
              </Box>
            )}
          </Paper>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100', p: 2 }}>
      <Box sx={{ width: '100%', maxWidth: 800, position: 'relative' }}>
        {!isMobile && (
          <Box sx={{ overflowX: 'auto', mb: 3, '&::-webkit-scrollbar': { height: 8 }, '&::-webkit-scrollbar-thumb': { bgcolor: 'grey.400', borderRadius: 1 } }}>
            <Stepper activeStep={activeStep} sx={{ bgcolor: 'transparent', minWidth: 'max-content' }}>
              {steps.map((step) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        )}

        <Paper sx={{ p: { xs: 2, sm: 4 } }}>
          <Box sx={{ minHeight: 300, mb: 4, position: 'relative' }}>
            {isMobile && allowSkip && !isLastStep && (
              <Button onClick={onSkip} disabled={loading} size="small" sx={{ position: 'absolute', top: 0, right: 0 }}>
                Skip
              </Button>
            )}
            {steps[activeStep]?.content}
          </Box>

          {isMobile ? (
            <MobileStepper
              variant="progress"
              steps={steps.length}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={isLastStep ? onComplete : onNext} disabled={loading}>
                  {loading ? 'Processing...' : isLastStep ? 'Complete' : 'Next'}
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button size="small" onClick={onBack} disabled={activeStep === 0 || loading}>
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
            />
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button
                onClick={onBack}
                disabled={activeStep === 0 || loading}
                sx={{ visibility: activeStep === 0 ? 'hidden' : 'visible' }}
              >
                Back
              </Button>

              <Box sx={{ display: 'flex', gap: 2 }}>
                {allowSkip && !isLastStep && (
                  <Button onClick={onSkip} disabled={loading}>
                    Skip
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={isLastStep ? onComplete : onNext}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : isLastStep ? 'Complete' : 'Next'}
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
};
