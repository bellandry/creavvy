import { User } from "better-auth";
import { Plus } from "lucide-react";
import Image from "next/image";

type HomeDashboardProps = {
  user: User;
};

export function HomeDashboard({ user }: HomeDashboardProps) {
  return (
    <main className="w-full p-10 overflow-y-auto">
      <div className="flex flex-col w-full gap-10">
        {/* PageHeading */}
        <div>
          <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Bienvenue, {user.name}!
          </p>
          <p className="text-gray-400 mt-1">
            Heureux de vous revoir. Prêt à créer quelque chose d&apos;incroyable
            ?
          </p>
        </div>
        {/* Mes créations récentes Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
            Mes créations récentes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="flex flex-col gap-3 group">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk0-gLlW1PWODgjv-bOCbrtOy-_J17Kq6MM4dxC4aZrgsWfx_W_re3HEPGZoI-vdl1WOO3KsINLhGse6cXrUfOYr44AJ3P2PXjG_dDSM_pMbiz4NsTDTXa6tJ8Le3YaqRrJhiLs3FuWHZ5Apatvm9CuR3dGgP7KfysBduagvwvY-wBxFM3-lD9xZJso77qqW9qOUJy1GfVaPclRi8UNb213snjSV0nn-rDFqGOwYXCvbwtDeKJKOuBmqPfubhgvWd-PwowZag33CM"
                  width={100}
                  height={100}
                  alt="Visual of a React component code snippet"
                />
              </div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  React Component Snippet
                </p>
                <p className="text-gray-400 text-sm font-normal leading-normal">
                  Créé le 15 juil. 2024
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1dGN0X6lNGELU7ael3M_Emj0k5n8EFOZ2tyc3eRSIReIfGlX30Pgi6LLCDY6NN3klLVi9lk1mG_CeFCPSCCwfnSOZz7h9B74MT75DhHfdDwzRWDQI88rzUmEJECWPg3qDkvGh2a5lo-A9QzC3d62YEy5m1J8mxI8Kw0a9IYOHs0-t5l1xnVllDlWnIyuMPOkH_897Yb4jP5djjH-xz3OgsoDV9ygRT4a9CYK70nYUpOgfjKi3indsIpAOZ0xusf4M-gArCh_TKT4"
                  width={100}
                  height={100}
                  alt="Visual of an API fetch example code snippet"
                />
              </div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  API Fetch Example
                </p>
                <p className="text-gray-400 text-sm font-normal leading-normal">
                  Créé le 14 juil. 2024
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDexUDbX9sz8wcul5k0CPcck1gNH7UDNhfGooGbCCYR6Q7yHmkPR6wqtEmd3W9HplwWGbUH6tCE4A4Q4woA6AcCzCS3UJepq_aVzsDx489YKWoe5uKAY0z2xyG0fmjmmBGZ2PABWph8wpasjTF4JsoGdxpxFzMyzv5pnT1lQoKf09lnNFAhL0Rj7cbsyFt5mbX0QQARn_zAsbvn2fWkIF2CKnEu4VgcZxnsbMuUrJsYQ5_bdWl4CXLE14zj4gD1qrLc3XqxDBJL-50"
                  width={100}
                  height={100}
                  alt="Template for Instagram posts"
                />
              </div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  CSS Grid Layout
                </p>
                <p className="text-gray-400 text-sm font-normal leading-normal">
                  Créé le 12 juil. 2024
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZBcxNc5gpGEriXA30OuN5CpECObIkGAVoYmFldQQwmAZKtMGIrG2TAfuH1heJwL2GSpbfwt5pfDtEUHfAICcvmD8nmizV9jNlmKQEEpTmmeqRzPDYIu9etH2vzDLja6o_EtGEXHqPcOQ5ndlQtoUnjt2xyp9kfttfr2Lm6557f7AohXg8VtQlq0q0BxZpLMte2ODHdQcNJVJ8X8cF0_dLYNgEf2cOJTK893oF3xo0afvT8nTWfWJMSgfkMSljXokf3_44gINWdng"
                  width={100}
                  height={100}
                  alt="Visual of a Python data function code snippet"
                />
              </div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  Python Data Function
                </p>
                <p className="text-gray-400 text-sm font-normal leading-normal">
                  Créé le 10 juil. 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
            Templates sauvegardés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="flex flex-col gap-3 group">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNuWtz6x2-EmjzGOGBJJgWA9MGKfDGb1ABaYzsLZDSINUP3BoNqwvuY6L677n3KjU4c2n-2WNzwDkg7pZbt4AcKxhAE5uBC-_v1bYY-3FFdpk65fM08C5_3uK1TQ1_PFbjS7YnDYMDMx0WbJuc_MnwGttbDg9kmFWJKNhkIRfTy6wbL42zUi1NpxrmZvt8ivhoOohbOrGvHEHVCHnG2_KIv3GYIvR2T8JhmZ-ysw49352Y85nAjnE25Y3ObydmrV-anv598ckbmT4"
                  width={100}
                  height={100}
                  alt="Template for Instagram posts"
                />
              </div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  Instagram Post Template
                </p>
                <p className="text-gray-400 text-sm font-normal leading-normal">
                  Fond dégradé violet
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                data-alt="Template for Twitter/X code snippets"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVibn9GWfrCNniye3lCBlnm7kUVLrj5nyjk3kzsz2ZBJF-eClnVcsB-hvaIGxhPpLOYSKeUAeVectvNt46gAbN5CFBRXuyv6eEdL9Icw9cvI3WEUitWf-0ay3PEo7o_i-6SAOoobnofghsrVCjUrnG4pKyj7vGDlt3TioYMWv-TV_YXLnvPIqaLCFdofE_Pkv4CEZak8oHDfFZxaRC_O6Gml6PUsc-gsaBAQ01NR92xQOHletU7KirWqrOAQYK4OHw-__bGj1FOs0')`,
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  Twitter Code Snippet
                </p>
                <p className="text-gray-400 text-sm font-normal leading-normal">
                  Thème carbone minimaliste
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center w-full bg-white/5  aspect-video rounded-lg border-2 border-dashed border-white/10">
                <button className="flex items-center justify-center h-16 w-16 bg-primary rounded-full hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined text-white text-4xl">
                    <Plus />
                  </span>
                </button>
              </div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  Ajouter un template
                </p>
                <p className="text-gray-400 text-sm font-normal leading-normal">
                  Créez un nouveau design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
