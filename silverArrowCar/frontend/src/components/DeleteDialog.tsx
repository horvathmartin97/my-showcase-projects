import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

type DeleteCarDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  carModel?: string;
  onConfirm: () => void;
};

export default function DeleteCarDialog({
  open,
  onOpenChange,
  carModel,
  onConfirm,
}: DeleteCarDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Biztos törölni szeretnéd? {carModel ? `“${carModel}”` : "autót?"}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Ez a folyamat végleges és nem visszvonható
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Vissza</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} className="hover:bg-red-500">
            Törlés
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
