import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  AdminLayout,
  AdminCard,
  AdminSectionTitle,
  AdminField,
  AdminInput,
  AdminButton,
} from "@/components/admin/AdminLayout";
import { useI18n } from "@/lib/i18n";
import { useAdmin, type BrandSettings } from "@/lib/admin-store";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Brand Settings — Admin" }] }),
  component: AdminSettingsPage,
});

function AdminSettingsPage() {
  const { t } = useI18n();
  const { state, updateBrand } = useAdmin();
  const [form, setForm] = useState<BrandSettings>(state.brand);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    updateBrand(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <AdminLayout>
      <AdminSectionTitle>{t("admin.brandSettings")}</AdminSectionTitle>

      <AdminCard className="mt-8">
        <div className="space-y-5">
          <AdminField label={t("admin.brand.name")}>
            <AdminInput
              value={form.brandName}
              onChange={(e) => setForm({ ...form, brandName: e.target.value })}
            />
          </AdminField>
          <AdminField label={t("admin.brand.logoUrl")}>
            <AdminInput
              value={form.logoUrl}
              onChange={(e) => setForm({ ...form, logoUrl: e.target.value })}
              dir="ltr"
              placeholder="https://..."
            />
          </AdminField>
          <AdminField label={t("admin.brand.heroLogoUrl")}>
            <AdminInput
              value={form.heroLogoUrl}
              onChange={(e) => setForm({ ...form, heroLogoUrl: e.target.value })}
              dir="ltr"
              placeholder="https://..."
            />
          </AdminField>
          <AdminField label={t("admin.brand.faviconUrl")}>
            <AdminInput
              value={form.faviconUrl}
              onChange={(e) => setForm({ ...form, faviconUrl: e.target.value })}
              dir="ltr"
              placeholder="https://..."
            />
          </AdminField>

          {form.logoUrl && (
            <div className="rounded-md border border-border/70 p-4">
              <p className="mb-2 text-[0.58rem] font-light tracking-[0.14em] text-muted-foreground">
                {t("admin.brand.logo")}
              </p>
              <img src={form.logoUrl} alt="Logo preview" className="h-12 w-auto" />
            </div>
          )}

          <div className="flex items-center gap-4">
            <AdminButton onClick={handleSave}>{t("admin.brand.save")}</AdminButton>
            {saved && (
              <span className="text-[0.62rem] font-light tracking-[0.14em] text-primary">
                {t("admin.brand.saved")}
              </span>
            )}
          </div>
        </div>
      </AdminCard>
    </AdminLayout>
  );
}
