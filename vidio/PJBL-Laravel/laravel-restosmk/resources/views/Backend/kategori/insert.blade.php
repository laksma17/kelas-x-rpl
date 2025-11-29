@extends('Backend.back')

@section('admincontent')
    <div class="row">
        <div class="col-6">
            <form action="{{ url('admin/kategori') }}" method="post">
                @csrf
                <select class="form-select" name="idkategori" onchange="this.form.submit()">
                    <option value="">-- Pilih Kategori --</option>
                        @foreach ($kategoris as $kategori)
                            <option value="{{ $kategori->idkategori }}">{{ $kategori->kategori }}</option>
                        @endforeach
                </select>
                

                <div class="mt-2">
                    <label class="form-label" for="">Kategori</label>
                    <input class="form-control" value="{{ old('kategori') }}" type="text" name="kategori" id="">
                    <span class="text-danger">
                        @error('kategori')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-4">
                    <button type="submit" class="btn-success btn">Simpan</button>
                </div>

            </form>
        </div>
    </div>
@endsection