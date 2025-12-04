"use client";


export type WizardStep = "profile" | "workspace";

interface WizardFormProps {
  children: React.ReactNode;
  currentStep: WizardStep;
  onStepChange: (step: WizardStep) => void;
}

export function WizardForm({
  children,
  currentStep,
  onStepChange,
}: WizardFormProps) {
  const steps: { id: WizardStep; label: string }[] = [
    { id: "profile", label: "Profile" },
    { id: "workspace", label: "Workspace" },
  ];

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <div className="max-w-2xl mx-auto min-h-screen justify-center flex flex-col items-center w-full space-y-6 p-4">
      {/* Progress Indicator */}
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    index <= currentStepIndex
                      ? "bg-primary border-primary text-white"
                      : "bg-white/5 border-white/20 text-white/40"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`text-sm mt-2 ${
                    index <= currentStepIndex
                      ? "text-white font-medium"
                      : "text-white/40"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-2 mb-6 transition-all ${
                    index < currentStepIndex
                      ? "bg-primary"
                      : "bg-white/20"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white/8 w-full max-w-md backdrop-blur-sm border border-primary/20 rounded-lg p-6">
        {children}
      </div>
    </div>
  );
}
